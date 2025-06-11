"use client";

import React, { useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Sidebar from '@/components/sidebar';
import Background from '@/components/background';

const PageMainContent: React.FC = () => {
    const [currentEmoji, setCurrentEmoji] = useState('😍');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [pageContentHtml, setPageContentHtml] = useState(
        `<p>Write, press 'space' for AI for commands...</p>`
    );

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setCurrentEmoji(emojiData.emoji);
        setShowEmojiPicker(false);
    };

    const editor = useEditor({
        extensions: [
            StarterKit.configure({

                heading: {
                    levels: [1, 2, 3, 4, 5, 6],
                },
            }),
        ],

        content: pageContentHtml,
        onUpdate: ({ editor }) => {

            setPageContentHtml(editor.getHTML());
        },
        editorProps: {
            attributes: {


                class: `
                    prose prose-lg dark:prose-invert max-w-none
                    focus:outline-none p-4 min-h-[150px] bg-white text-gray-800
                    empty:before:content-[attr(data-placeholder)]
                    empty:before:text-gray-400
                    empty:before:pointer-events-none
                    empty:before:block
                `.replace(/\s+/g, ' ').trim(),
                'data-placeholder': "Write, press 'space' for AI for commands...",
            },
        },
    });


    if (!editor) {
        return null;
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent py-20 px-4 flex items-center justify-center'>

            <div className="max-w-3xl mx-auto px-8">
                <Sidebar />

                <div
                    className="text-8xl mb-12 text-center cursor-pointer relative"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                    {currentEmoji}
                    {showEmojiPicker && (
                        <div className="absolute z-10 left-1/2 -translate-x-1/2 mt-4">
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                        </div>
                    )}
                </div>

                <h1
                    className="text-6xl sm:text-7xl font-extrabold text-gray-900 mb-8 text-center outline-none focus:outline-none"
                    contentEditable
                    suppressContentEditableWarning
                >
                    New page
                </h1>


                <div className="w-full">
                    <EditorContent editor={editor} className="" />
                </div>

                <div className="flex justify-center mt-20 space-x-2 sm:space-x-3 flex-wrap gap-y-3">
                    {["Ask AI", "Meet", "Database", "Form", "Templates"].map((label) => (
                        <button
                            key={label}
                            className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md border border-gray-200 hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                        >
                            <span>{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageMainContent;