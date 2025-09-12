import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Root.module.css'
import NetspaceImg from '../images/netspace-wide.png'

const Root = () => {
    const pageTitle = "Root";

    return (
      <Page title={pageTitle}>
        <div className={styles.rootPage}>
          <img src={NetspaceImg} alt="Netspace Albania" />
          <h1>HISTORY</h1>
          <h3>NetSpace Albania is a community of people just like YOU!</h3>
          <h4>Aiming to learn, share, and help each-other experience building things.</h4>

          {/* Collapsible History Section */}
          <details>
            <summary><strong>History of Netspace Albania</strong></summary>

            <h2>April 2019: Tirana Cyber Zone</h2>
            <p>
              <a href="https://www.linkedin.com/in/klesti">Klesti</a> launched <strong>Tirana Cyber Zone (TCZ)</strong>, 
              soon joined by other members like 
              <a href="https://www.linkedin.com/in/ferdinand"> Ferdinand</a>, 
              <a href="https://www.linkedin.com/in/indrit"> Indrit</a>, and 
              <a href="https://www.linkedin.com/in/elvis"> Elvis</a>.
              By September, the community was active in Open Labs events, and the idea of creating a hackerspace was born.
            </p>

            <h2>From TCZ to Hackerspace Albania (2020)</h2>
            <p>
              <strong>January 2020:</strong> 
              <a href="https://www.linkedin.com/in/klesti"> Klesti</a> connected with 
              <a href="https://www.linkedin.com/in/uljan"> Uljan</a>, leading to a rebrand as 
              <strong> Hackerspace Albania (HSA)</strong>.  
              The community grew rapidly online (Discord and other social media), attracting new members and experimenting with tech projects, including IoT and LoRa systems.
            </p>

            <h2>Collaboration & Growth (2020–2021)</h2>
            <p>
              With support from <strong>Open Labs Hackerspace</strong>, the group co-hosted events like:
            </p>
            <ul>
              <li>24 Hours of Code</li>
              <li>IoT workshops</li>
              <li>CTF competitions</li>
            </ul>
            <p>
              Access to shared tools and space helped the community expand to over <strong>200 members</strong>.
            </p>

            <h2>HSA → NSA (2022)</h2>
            <p>
              During <strong>OSCAL 2022</strong>, 
              <a href="https://www.linkedin.com/in/rei"> Rei</a> joined the leadership team alongside 
              <a href="https://www.linkedin.com/in/klesti"> Klesti</a>, 
              <a href="https://www.linkedin.com/in/meco"> Meco</a>, 
              <a href="https://www.linkedin.com/in/klaidi"> Klaidi</a>, 
              <a href="https://www.linkedin.com/in/kilton"> Kilton</a>, and 
              <a href="https://www.linkedin.com/in/rubin"> Rubin</a>.  
              A new board restructured the group, and the community began formalizing as a non-profit under the name 
              <strong> NSA – Netspace Albania</strong>.
            </p>
            <p>
              NSA secured a central Tirana location, furnished it with tools, and hosted workshops and collaborations with partners like 
              <strong> FLOSSK</strong> and <strong> BSides</strong>.  
              The community grew to <strong>300+ members</strong>.
            </p>

            <h2>Today (2025)</h2>
            <p>
              Financial and personal challenges led to the closure of the physical space.  
              NSA shifted focus back to its <strong>online community</strong>, continuing events and discussions on Discord.  
            </p>
            <p>
              The community endures as a symbol of <strong>collaboration</strong> and 
              <strong> open knowledge-sharing</strong> in Albania’s tech ecosystem.
            </p>
          </details>
        </div>
      </Page>
    )
}

export default Root

export const Head: HeadFC = () => <title>NetSpace - Root</title>
