import { prisma } from "../../config/db";

const createMessage = async (payload: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  const result = await prisma.message.create({
    data: payload,
  });
  return result;
};

const getAllMessages = async () => {
  const result = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

const replyToMessage = async (id: string, reply: string) => {
  const result = await prisma.message.update({
    where: { id },
    data: {
      reply,
      repliedAt: new Date(),
    },
  });
  return result;
};

export const contactService = {
  createMessage,
  getAllMessages,
  replyToMessage,
};
