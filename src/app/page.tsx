import { Inter } from "next/font/google";
import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	await db.set("hello", "hello");
	return <Button variant={"default"}>Hello</Button>;
}
