import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown'
import './App.css'

//a heading element (H1 size), 
//a sub heading element (H2 size), 
//a link, inline code, a code block, 
//a list item, a blockquote, an image, and bolded text.

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote
  ![alt text](image.jpg)
  **bold text**

  marked.setOptions({
    breaks: true
  })
  `);

    return ( 
    <div className="App">
      <textarea 
      id="editor" 
      onChange={(event) => {
      setText(event.target.value);
    }}
      value={text}
      ></textarea>
    </div>
    
  );  
}

export default App;
