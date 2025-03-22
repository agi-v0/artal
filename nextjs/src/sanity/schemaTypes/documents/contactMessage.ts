export default {
  name: 'contactMessage',
  title: 'Contact Messages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'receivedAt',
      title: 'Received At',
      type: 'datetime',
    },
    {
      name: 'emailId',
      title: 'Email ID',
      type: 'string',
    }
  ]
}