import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem temporibus dolore harum ut consectetur esse ex blanditiis porro vero autem nisi et perspiciatis voluptates, officia deleniti inventore aperiam saepe?'

const messages = [
  { author: 'Elliot', time: '3:15 PM', message },
  { author: 'Barton', time: '3:17 PM', message },
  { author: 'Elliot', time: '3:18 PM', message },
  { author: 'Kurt', time: '3:23 PM', message },
  { author: 'Barton', time: '3:24 PM', message },
  { author: 'Elliot', time: '3:24 PM', message },
  { author: 'Ann', time: '3:29 PM', message }
]

export const MessageContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`

export const MessageText = styled.p`
  color: #444;
  margin: 0;
`

export const MessageMessage = MessageText.extend`
  font-family: sans-serif;
  margin-bottom: 0.5rem;
`

export const MessageSubTextArea = styled.div`
  display: inline-block;
  text-align: ${({ right }) => right ? 'right' : 'left'};
`

export const MessageSubText = MessageText.extend`
  color: ${({ dull }) => dull ? '#888' : 'inherit'};
  display: inline-block;
  font-family: cursive;
  font-size: 0.8rem;
  margin-left: ${({ marginLeft = 0 }) => `${marginLeft}rem`}
`

export const Message = ({ message, author, time }) => {
  return (
    <MessageContainer>
      <MessageMessage>{message}</MessageMessage>
      <MessageSubTextArea right>
        <MessageSubText>{author}</MessageSubText>
        <MessageSubText marginLeft="0.25" dull>- {time}</MessageSubText>
      </MessageSubTextArea>
    </MessageContainer>
  )
}

const MessagesContainer = styled.div`
  min-height: 91vh;
  max-height: 91vh;
  padding: 0.25rem;
  overflow: scroll;
`

export const Messages = () => {
  return (
    <MessagesContainer>
      {messages.map((message) => <Message key={message.time + message.author} {...message} />)}
    </MessagesContainer>
  )
}

const SMessageForm = styled.form`
  background: #efefef;
  border-bottom: 2px solid #ccc;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 7.3vh;
  padding: 0rem 0.5rem;
`

const MessageInput = styled.input`
  border: 1px solid #aaa;
  border-radius: 0.45rem;
  color: #666;
  height: 1.5rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  &:focus {
    outline: none;
    border: 1px solid #009688;
  }
`

export const MessageForm = () => {
  return (
    <SMessageForm>
      <MessageInput type="text" />
    </SMessageForm>
  )
}

const FeedContainer = styled.div`
  min-height: 100vh;
`

const Controls = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  right: 0;
  left: 0;
  z-index: 5;
`

const Button = styled.button`
  font-weight: 600;
  background: transparent;
  padding: 0.5rem;
  border: 1.2px solid #fff;
  border-radius: 0.25rem;
  color: #fff;
  width: 48%;
  &:focus {
    outline: none;
    border-color: #ccc;
    color: #ccc;
  }
  &:active, &:hover {
    border-color: #ccc;
    color: #ccc;
  }
`

export const FeedX = ({ toggleLeft }) => {
  return (
    <FeedContainer>
      {<SideBarLeftPortalWithState />}
      <Controls>
        <Button onClick={toggleLeft}>Left</Button>
        <Button>Right</Button>
      </Controls>
      <Messages />
      <MessageForm />
    </FeedContainer>
  )
}

export const Feed = connect(
  () => ({}),
  (dispatch, state) => ({
    toggleLeft() {
      dispatch({ type: 'TOGGLE_LEFT_SIDEBAR' })
    }
  })
)(FeedX)

const SSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: #4d6571;
  bottom: 0;
  color: white;
  top: 0;
  position: absolute;
  z-index: 10;
  min-width: 80vw;
  box-shadow: 1px 0px 8px #000;
  left: ${({ open }) => open ? '0' : '-80vw'};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  transition: left 0.5s ease-in-out, visibility 0.5s ease-in-out;
  justify-content: space-between;  
`

export const SidebarToggleButton = styled.button`
  color: #fff;
  align-self: ${({ alignRight }) => alignRight ? 'flex-end' : 'flex-start'};
  border: 2px solid #fff;
  border-radius: 1rem;
  width: 1.5rem;
  background: transparent;
  font-size: 0.8rem;
  margin: 0.25rem;
  padding: 5px;
`

export const SidebarContent = styled.div`
  padding: 0.5rem;
  height: 100%;
`

export const SidebarNav = styled.nav`
  
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`

export const NavItem = styled.li`
  margin: 0 0.5rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  height: 0.5rem;
  width: 0.5rem;
  background: ${({ active }) => active ? '#fff' : 'transparent'};
  &:hover {
    cursor: pointer;
  }
`

export const SidebarPannel = styled.div`
  position: absolute;
  transform: ${({ left }) => `translateX(${left}vw)`}
`

export const SidebarPannels = ({ sidebar, toggleLeft }) => {
  return (
    <SSidebar {...sidebar}>
      <SidebarToggleButton alignRight onClick={toggleLeft}>X</SidebarToggleButton>
      <SidebarContent>
        <SidebarPannel left="-160">
          <h2>Pannel 1</h2>
        </SidebarPannel>
        <SidebarPannel left="-80">
          <h2>Pannel 2</h2>
        </SidebarPannel>
        <SidebarPannel left="0">
          <h2>Pannel 3</h2>
        </SidebarPannel>
      </SidebarContent>
      <SidebarNav>
        <NavList>
          <NavItem active />
          <NavItem />
          <NavItem />
        </NavList>
      </SidebarNav>
    </SSidebar>
  )
}

export const SidebarLeftPortal = (props) => {
  return ReactDOM.createPortal(
    <SidebarPannels {...props} />,
    document.getElementById('sidebar-left')
  )
}

const mapStateToProps = ({ ui: { leftSidebar: sidebar } }) => {
  return {
    sidebar
  }
}

export const SideBarLeftPortalWithState = connect(
  mapStateToProps,
  (dispatch, state) => ({
    toggleLeft() {
      dispatch({ type: 'TOGGLE_LEFT_SIDEBAR' })
    }
  })
)(SidebarLeftPortal)