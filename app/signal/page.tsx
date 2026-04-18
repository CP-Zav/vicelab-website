import { redirect } from "next/navigation";

// /signal is now /siv — redirect all legacy links
export default function SignalPage() {
  redirect("/siv");
}
