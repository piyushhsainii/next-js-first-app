import Image from 'next/image'
import styles from './page.module.css'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <Fragment>
      <div> 
        <h2>
          NEXT JS APP
        </h2>
        <ul>
          <li> <Link href={'/1'} >1</Link> </li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </Fragment>
    )
}
