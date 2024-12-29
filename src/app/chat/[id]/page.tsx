import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";
import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";

export default async function chat({ params }: { params: { id: string } }) {
  const param = (await params).id;
  // console.log("The group id is", param);

  if (param.length !== 36) {
    return notFound();
  }

  const chatGroup: GroupChatType | null = await fetchChatGroup(param);
  if (chatGroup === null) {
    return notFound();
  }
  const chatGroupUsers: Array<GroupChatUserType> | [] =
    await fetchChatGroupUsers(param);

  const chats: Array<MessageType> | [] = await fetchChats(param);

  return (
    <div>
      <ChatBase group={chatGroup} users={chatGroupUsers} oldMessages={chats} />
    </div>
  );
}
