import './globals.css';
import Header from "./components/Header";
import JobBoard from './job-board/page';

export default function Home() {
  return (
    <>
      <Header />
      <JobBoard />
    </>
  )
}
