import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { ROOT_FOLDER } from "../../hooks/useFolder"

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const { currentUser } = useAuth()

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (currentFolder == null) return

    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }

    database.folders.add({
      name: name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-primary" size="sm">
        <FontAwesomeIcon icon={faFolderPlus} style={{fontSize:35}} />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form className="bg-dark" onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label className="text-primary">Folder Name</Form.Label>
              <Form.Control type="text" className="bg-dark text-light" required value={name}onChange={e => setName(e.target.value)}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button  onClick={closeModal}>
              Close
            </Button>
            <Button   type="submit">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
