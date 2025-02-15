import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  text: string;
};
export default function TextFormater({ text }: Props) {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-gray-800 border-b-2 pb-2 mb-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-xl font-medium text-gray-600 mt-4 mb-2" {...props} />,
        p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 text-gray-700" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 text-gray-700" {...props} />,
        li: ({ node, ...props }) => <li className="ml-4" {...props} />,
        strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
      }}
    >
        {text}
    </ReactMarkdown>
  )
}
