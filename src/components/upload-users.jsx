"use client"

import { useState } from "react"
import axios from "axios"
import { AlertCircle, CheckCircle, Upload, FileSpreadsheet } from "lucide-react"
import { cn } from "../lib/utils"

export default function UploadUsers() {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("idle")
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setStatus("idle")
      setMessage("")
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      const isExcel = droppedFile.name.match(/\.(xlsx|xls)$/)

      if (isExcel) {
        setFile(droppedFile)
        setStatus("idle")
        setMessage("")
      } else {
        setMessage("Please upload an Excel file (.xlsx or .xls)")
        setStatus("error")
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)
    setStatus("loading")
    setMessage("Uploading users...")

    try {
      const response = await axios.post("http://localhost:5000/upload-users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setMessage(response.data.message)
      setStatus("success")
    } catch (error) {
      setMessage("Error uploading file. Please try again.")
      setStatus("error")
      console.error(error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[50vh] p-40">
      <div className="w-full max-w-md overflow-hidden bg-background rounded-lg shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-light/30 via-background to-blue-light/30 opacity-50 pointer-events-none" />

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-center">Upload Users</h2>
          <p className="text-center text-muted-foreground">Import users from Excel spreadsheet</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className={cn(
                "border-2 border-dashed rounded-lg p-6 transition-all duration-300 ease-in-out",
                "flex flex-col items-center justify-center text-center",
                isDragging ? "border-purple-light bg-purple-light/5 scale-105" : "border-muted-foreground/25",
                status === "loading" ? "opacity-50" : "",
                "hover:border-blue-light/50 hover:bg-blue-light/5",
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="mb-4">
                <div
                  className={cn(
                    "size-16 mx-auto rounded-full flex items-center justify-center mb-2",
                    "bg-gradient-to-br from-purple-light/20 to-blue-light/20",
                    "transition-transform duration-500",
                    status === "loading" ? "animate-pulse" : "",
                  )}
                >
                  {status === "success" ? (
                    <CheckCircle className="size-8 text-green-500 animate-in fade-in-50 zoom-in-95 duration-300" />
                  ) : status === "error" ? (
                    <AlertCircle className="size-8 text-destructive animate-in fade-in-50 zoom-in-95 duration-300" />
                  ) : file ? (
                    <FileSpreadsheet className="size-8 text-primary animate-in fade-in-50 zoom-in-95 duration-300" />
                  ) : (
                    <Upload
                      className={cn("size-8 text-muted-foreground", isDragging ? "text-primary animate-bounce" : "")}
                    />
                  )}
                </div>

                <h3 className="text-lg font-medium">{file ? file.name : "Drag & drop your Excel file here"}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {file ? `${(file.size / 1024).toFixed(2)} KB` : "or click to browse (.xlsx, .xls)"}
                </p>
              </div>

              <input
                type="file"
                id="file-upload"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                className="hidden"
                disabled={status === "loading"}
              />
              <button
                type="button"
                onClick={() => document.getElementById("file-upload").click()}
                disabled={status === "loading"}
                className="mt-2 px-4 py-2 text-sm font-medium text-primary bg-transparent border border-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                Select File
              </button>
            </div>

            {message && (
              <div
                className={cn(
                  "rounded-lg p-3 text-sm animate-in fade-in-50 slide-in-from-bottom-5 duration-300",
                  status === "success"
                    ? "bg-teal-light/10 text-teal-dark dark:text-teal-light"
                    : status === "error"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-purple-light/10 text-purple-dark dark:text-purple-light",
                )}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-light to-blue-light rounded-md hover:from-purple-dark hover:to-blue-dark transition-all duration-300"
              disabled={!file || status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="mr-2 inline-block size-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload Users"
              )}
            </button>
          </form>
        </div>

        <div className="flex justify-center border-t bg-muted/20 px-6 py-4">
          <p className="text-xs text-muted-foreground">Supported formats: .xlsx, .xls</p>
        </div>
      </div>
    </div>
  )
}