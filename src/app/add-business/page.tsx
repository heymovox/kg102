import { Metadata } from 'next'
import AddBusinessForm from './AddBusinessForm'

export const metadata: Metadata = {
  title: 'List Your Business',
  description: 'Add your business to Konnekt Globe and connect with buyers globally. Free basic listing with premium upgrade options.',
}

export default function AddBusinessPage() {
  return <AddBusinessForm />
}
