import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const Chat = () => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
      projectId="f390f109-520d-4265-9316-21c8428c65e4"
      username="john_smith"
      secret="pass1234"
      style={{ height: '100vh' }}
    />
    </div>
  )
}

export default Chat
