import { Notes } from  './notes'

export const NoteSchema = Astro.Class({
	name: 'Note',
	collection: Notes,
	fields: {
    title: {
      type: 'string',
      validator:Validators.and(
        [
          Validators.required(),
          Validators.maxLength(AppLib.notes.title.maxLength),
          Validators.string()
        ]
      )
    },
    content: {
      type: 'string',
      default: "",
      validator: Validators.and(
        [
          Validators.maxLength(AppLib.notes.content.maxLength),
          Validators.string()
        ]
      )
    },
    updatedAt: {
      type: 'date',
      validator:Validators.and(
        [
          Validators.required(),
          Validators.date()
        ]
      )
    },
    ownerId: {
      type: 'string' //owner id is not validated because it is never published/sent to the client (and the object returned from the client is what is validated, meaning it would return null)
    },
  }
})