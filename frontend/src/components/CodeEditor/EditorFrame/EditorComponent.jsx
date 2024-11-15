import { Editor } from '@monaco-editor/react'
import React from 'react'
import RemoteEditor from './RemoteEditor'

const EditorComponent = () => { // kor to style ta vlo kore scrollbar tar transparent ta thik korele hye jabe
    return (
        <div className=' w-full h-[92%] sm:h-[90%] flex '>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// Welcome to CodeSphere - Code, Compile, Run and Debug online from anywhere in world."
                theme='vs-dark'
                options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    cursorBlinking: 'smooth',
                    automaticLayout: true,
                    scrollBeyondLastLine: true,
                    highlightActiveLine: true,
                    suggestOnTriggerCharacters: true,
                     scrollbar: {
                        vertical: 'invisible',          // Show vertical scrollbar always
                        horizontal: 'visible',        // Show horizontal scrollbar always
                        verticalScrollbarSize: 12,    // Set vertical scrollbar size
                        horizontalScrollbarSize: 12,  // Set horizontal scrollbar size
                        verticalSliderSize: 10,       // Set size of the scrollbar slider (thumb)
                        horizontalSliderSize: 10,
                    },
                }}
            />

            <RemoteEditor />
        </div>
    )
}

export default EditorComponent
