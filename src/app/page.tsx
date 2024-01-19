import AddTodo from "@/presentation/AddTodo";
import Navbar from "@/presentation/Navbar";
import Todos from "@/presentation/Todos";

export default function Home() {
  return (
    <>
      <Navbar />
      <AddTodo />
      <Todos />
    </>
  );
}
