'use client'

import {useState} from 'react'

export default function DocsDialog({
  open,
  onClose,
  docs,
}: {
  open: boolean
  onClose: () => void
  docs: {title: string; url: string}[]
}) {
  const [activeTab, setActiveTab] = useState(docs?.[0]?.title || '')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl shadow-xl w-[95%] lg:w-[80%] overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-gray-100">Documentation</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-300 transition-colors">
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          {docs.map(doc => (
            <button
              key={doc.title}
              onClick={() => setActiveTab(doc.title)}
              className={`flex-1 text-center py-2 text-sm font-medium transition-colors ${
                activeTab === doc.title
                  ? 'border-b-2 border-primary-400 text-primary-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}>
              {doc.title}
            </button>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="p-4 h-[70vh] bg-gray-800">
          {docs.map(
            doc =>
              activeTab === doc.title && (
                <iframe
                  key={doc.title}
                  src={doc.url}
                  className="w-full h-full rounded-lg border border-gray-700"
                  title={doc.title}></iframe>
              ),
          )}
        </div>
      </div>
    </div>
  )
}
