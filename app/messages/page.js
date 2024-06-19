import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 0;
// export const dynamic = 'force-dynamic'; // same as setting as 'no-store' in cache

export default async function MessagesPage() {
  unstable_noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   // cache: 'no-store',
  //   // next: {
  //   //   revalidate: 0, // time in seconds
  //   // },
  // });
  // const messages = await response.json();

  const messages = await getMessages();
  console.log({ messages });

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
