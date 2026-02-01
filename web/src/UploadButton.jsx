import { useState } from 'react'
import { Button, Modal, Select, Textarea, Stack, Text } from '@mantine/core'

const locationOptions = [
  { value: 'Maggie Benston Center', label: 'Maggie Benston Center' },
  { value: 'Student Union Building (SUB)', label: 'Student Union Building (SUB)' },
  { value: 'West Mall Center', label: 'West Mall Center' },
  { value: 'Reacreational Activity', label: 'Reacreational Activity' },
  { value: 'Library', label: 'Library' },
]

export default function UploadButton({ onSubmit, onClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = { location, description }

    if (onSubmit) {
      onSubmit(payload)
    } else if (onClick) {
      onClick(payload)
    } else {
      console.log('Upload submit:', payload)
    }

    setIsOpen(false)
  }

  return (
    <div style={{ margin: '12px 0', display: 'inline-block' }}>
      <Button variant="filled" size="md" radius="md" onClick={() => setIsOpen(true)}>
        Upload / Post
      </Button>

      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create a meetup"
        centered
        radius="lg"
        zIndex={3000}
        withCloseButton
        withinPortal
        overlayProps={{ blur: 6, opacity: 0.55 }}
      >
        <form onSubmit={handleSubmit}>
          <Stack gap="sm">
            <Text size="sm" c="dimmed">
              Pick a location and add a quick description.
            </Text>
            <Select
              label="Location"
              placeholder="Select a location"
              data={locationOptions}
              value={location}
              onChange={(value) => setLocation(value ?? '')}
              required
              searchable
              radius="md"
              comboboxProps={{ withinPortal: false }}
            />
            <Textarea
              label="Description"
              placeholder="What do you want to do there?"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              minRows={3}
              autosize
              radius="md"
            />
            <Button type="submit" radius="md">
              Submit
            </Button>
          </Stack>
        </form>
      </Modal>
    </div>
  )
}
