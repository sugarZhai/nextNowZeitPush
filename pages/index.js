import Link from "next/link";
import Header from "../components/header";
import styled from 'styled-components'
const TestCon= styled.div`
.test{
  color:red;
}
`
export default () => (
  <TestCon>
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a className="test">Go to About Me</a>
      </Link>
    </section>
  </main>
  </TestCon>
);