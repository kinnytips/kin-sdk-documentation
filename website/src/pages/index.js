import React, { useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CustomCodeBlock from '../components/CustomCodeBlock'
import GithubCard from '../components/GithubCard'
import HowCard from '../components/HowCard'
import { repos } from '../data/github'

const heroExample = `
const messages = Kinny
  .from('messages')
  .select(\`
    id, text,
    user ( id, name )
  \`)
const newMessages = Kinny
  .from('messages')
  .on('INSERT', message => console.log('New message!', message) )
  .subscribe()
`.trim()
const subscribeExample = `
import { createClient } from '@Kinny/Kinny-js'
// Initialize 
const KinnyUrl = 'https://chat-room.Kinny.co'
const KinnyKey = 'public-anon-key'
const Kinny = createClient(KinnyUrl, KinnyKey)
// Get notified of all new chat messages
const realtime = Kinny
  .from('messages')
  .on('INSERT', message => {
    console.log('New message!', message)
  })
  .subscribe()
`.trim()
const readExample = `
import { createClient } from '@Kinny/Kinny-js'
// Initialize 
const KinnyUrl = 'https://chat-room.Kinny.co'
const KinnyKey = 'public-anon-key'
const Kinny = createClient(KinnyUrl, KinnyKey)
// Get public rooms and their messages
const publicRooms = await Kinny
  .from('rooms')
  .select(\`
    name,
    messages ( text )
  \`)
  .eq('public', true)
`.trim()
const createExample = `
import { createClient } from '@Kinny/Kinny-js'
// Initialize 
const KinnyUrl = 'https://chat-room.Kinny.co'
const KinnyKey = 'public-anon-key'
const Kinny = createClient(KinnyUrl, KinnyKey)
// Create a new chat room
const newRoom = await Kinny
  .from('rooms')
  .insert({ name: 'Kinny Fan Club', public: true })
`.trim()
const updateExample = `
import { createClient } from '@Kinny/Kinny-js'
// Initialize 
const KinnyUrl = 'https://chat-room.Kinny.co'
const KinnyKey = 'public-anon-key'
const Kinny = createClient(KinnyUrl, KinnyKey)
// Update multiple users
const updatedUsers = await Kinny
  .from('users')
  .eq('account_type', 'paid')
  .update({ highlight_color: 'gold' })
`.trim()
const nodeTSExample = `
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@Kinny/Kinny-js';
const Kinny = createClient(
  process.env.NEXT_PUBLIC_Kinny_URL,
  process.env.Kinny_SECRET_KEY
);
type User = {
  id: string;
  username: string;
  status: 'ONLINE' | 'OFFLINE';
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allOnlineUsers = await Kinny
    .from<User>('users')
    .select('*')
    .eq('status', 'ONLINE');
  res.status(200).json(allOnlineUsers);
};
`.trim()

const umdExample = `
<script src="https://unpkg.com/@Kinny/Kinny-js/umd/Kinny.js"></script>
<script>
  // Initialize
  const KinnyUrl = 'https://chat-room.Kinny.co'
  const KinnyKey = 'public-anon-key'
  const Kinny = supanase.createClient(KinnyUrl, KinnyKey)
  // Get public rooms and their messages
  Kinny
    .from('rooms')
    .select(\`
      name,
      messages ( text )
    \`)
    .eq('public', true)
    .then(response => {
      // Do something with the response
    })
</script>
`.trim()

const features = [
  {
    title: <>Wallet apps</>,
    imageUrl: '',
    description: <>Build a realtime cryptocurrency application using Kin</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Realtime dashboards</>,
    imageUrl: '',
    description: <>Build live displays using Kin and Solana blockchain data</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Transaction History</>,
    imageUrl: '',
    description: <>Review all </>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Realtime Games</>,
    imageUrl: '',
    description: <>Keep all players in-sync with game actions and leader dashboards.</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Streaming analytics</>,
    imageUrl: '',
    description: <>Send actions and events to your data warehouses.</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Backoffice and Admin</>,
    imageUrl: '',
    description: <>Build admin dashboards without stressing about conflict resolution.</>,
    href: '/docs/guides/examples',
  },
]

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const [visibleCodeExample, showCodeExample] = useState('READ')
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main className="HomePage">
        {/* HEADER */}
        <header className={clsx('hero full', styles.heroBanner)}>
          <div className="container">
            <div className="row">
              <div className="col col--5">
                <h2 className="hero__title">{siteConfig.tagline}</h2>
                <p className="hero__subtitle">
                  Kinny adds realtime access to crytocurrency without burdening the user with fees.
                </p>
                <div>
                  <Link
                    className={clsx(
                      'button hero--button button--md button--secondary button--outline responsive-button',
                      styles.button
                    )}
                    to={useBaseUrl('docs')}
                    style={{ marginLeft: 0, marginTop: 10 }}
                  >
                    Learn More
                  </Link>
                  <Link
                    className={clsx(
                      'button hero--button button--md button--primary responsive-button',
                      styles.button
                    )}
                    to={'https://app.Kinny.io'}
                    style={{ marginTop: 10 }}
                  >
                    Beta sign up →
                  </Link>
                </div>
              </div>
              <div className="col col--7">
                <CustomCodeBlock
                  header="Easily implement kin and start using cryptocurrency in your app!"
                  js={heroExample}
                />
              </div>
            </div>
          </div>
        </header>

        <section
          style={{
            padding: 30,
          }}
          className="hero is--dark"
        >
          <div
            className="container "
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <p
              style={{
                fontWeight: 'bold',
                padding: '0px 20px',
                margin: 0,
                display: 'inline-block',
              }}
            >
              Created by Kinny Technologies Inc.
            </p>
          </div>
        </section>

        {/* HOW */}
        <section className={'section-lg'}>
          <div className="container">
            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">How it works</h2>
                <p className="">
                  Kinny helps you build faster, so you can focus on your core products.
                </p>
              </div>
            </div>

            <div className="HowSections row is-multiline">
              <div className={'col col--4 '}>
                {/* <div>
                  <img
                    className="diagram"
                    src="/img/how-replication.png"
                    alt="Database replication"
                  />
                </div> */}
                <div>
                  <HowCard
                    title="Built with Solana"
                    description={
                      <>Sign up and query your Postgres database in less than 2 minutes.</>
                    }
                    featureTitle="You get"
                    features={[
                      'Full Kin Wallet',
                      'Easily to implement Kin functions',
                      'Realtime notifications via websockets',
                    ]}
                  />
                </div>
              </div>

              <div className={'col col--4 '}>
                {/* <div>
                  <img className="diagram" src="/img/how-transformation.png" alt="Kinny" />
                </div> */}
                <div>
                  <HowCard
                    title="Kinny handles the magic"
                    description={<>Kinny handles the stuff you're usually too busy to build.</>}
                    featureTitle="You get"
                    features={[
                      'Wallet Functions',
                      'Custom implementations of transactions',
                      'Built-in transaction monitoring',
                    ]}
                  />
                </div>
              </div>

              <div className={'col col--4 '}>
                {/* <div>
                  <img className="diagram" src="/img/how-client-libs.png" alt="Client libraries" />
                </div> */}
                <div>
                  <HowCard
                    title="Build realtime applications"
                    description={<>Kinny provides libraries and examples to get you started.</>}
                    featureTitle="Build"
                    features={[
                      'Auto-updating dashboards',
                      'IoT applications',
                      'Realtime chat apps',
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Devs */}
        <section className={styles.forDevelopers}>
          <div className="container">
            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">For Developers</h2>
                <p className="">
                  We provide direct interface to the blockchain&nbsp; 
                  <strong className="has-emphasis">instantly</strong> so you can stop building
                  SDKs and focus on building your products.
                </p>
              </div>
            </div>
            <div className="ForDevelopers">
              <div className="row">
                <div className="ButtonTabs col col--3">
                  <div>
                    <button
                      className={`button button--${
                        visibleCodeExample === 'READ' ? 'info is-active' : 'info '
                      }`}
                      onClick={() => showCodeExample('READ')}
                    >
                      Get your wallet
                    </button>
                    <button
                      className={`button button--${
                        visibleCodeExample === 'SUBSCRIBE' ? 'info is-active' : 'info'
                      }`}
                      onClick={() => showCodeExample('SUBSCRIBE')}
                    >
                      Realtime subscriptions
                    </button>
                    <button
                      className={`button button--${
                        visibleCodeExample === 'CREATE' ? 'info is-active' : 'info '
                      }`}
                      onClick={() => showCodeExample('CREATE')}
                    >
                      Create a transaction
                    </button>
                    <button
                      className={`button button--${
                        visibleCodeExample === 'UPDATE' ? 'info is-active' : 'info '
                      }`}
                      onClick={() => showCodeExample('UPDATE')}
                    >
                      Create Multiple Transactions
                    </button>
                    <button
                      className={`button button--${
                        visibleCodeExample === 'NODETS' ? 'info is-active' : 'info '
                      }`}
                      onClick={() => showCodeExample('NODETS')}
                    >
                      Create a wallet
                    </button>
                    {/* <button
                      className={`button button--${
                        visibleCodeExample === 'UMD' ? 'info is-active' : 'info '
                      }`}
                      onClick={() => showCodeExample('UMD')}
                    >
                      Install from CDN
                    </button> */}
                  </div>
                </div>
                <div className="col col--9 code-with-header">
                  {visibleCodeExample === 'READ' && (
                    <CustomCodeBlock
                      header="Get all public rooms and their messages"
                      js={readExample}
                    />
                  )}
                  {visibleCodeExample === 'SUBSCRIBE' && (
                    <CustomCodeBlock
                      header="Receive realtime messages in an example chat room"
                      js={subscribeExample}
                    />
                  )}
                  {visibleCodeExample === 'CREATE' && (
                    <CustomCodeBlock header="Create a new chat room" js={createExample} />
                  )}
                  {visibleCodeExample === 'UPDATE' && (
                    <CustomCodeBlock header="Update a user" js={updateExample} />
                  )}
                  {visibleCodeExample === 'NODETS' && (
                    <CustomCodeBlock
                      header="Server-side & client-side TypeScript support e.g. in Next.js API routes"
                      js={nodeTSExample}
                    />
                  )}
                  {visibleCodeExample === 'UMD' && (
                    <CustomCodeBlock header="Kin SDK standalone bundle" js={umdExample} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        {/* <section className={'section-lg'}>
          <div className="container">
            <h2 className="">Use Cases</h2>
            <div className="row is-multiline">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section> */}

        <section className={'section-lg'}>
          <div className="container">
            <div className={clsx('row', styles.centered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">Start Earning Today</h2>
                <p className="">
                  With Kin you can earn Rewards just for implementing.  Use our SDK in your app and you immediately begin earning.
                </p>
              </div>
            </div>

            {/* <div className={clsx('row', styles.centered)}>
              <div className="col">
                <img
                  className={''}
                  src={'/img/custom-docs.png'}
                  alt={'Self-documenting dashboards'}
                />
              </div>
            </div> */}
          </div>
        </section>

        {/* <section className={'section-lg'}>
          <div className="container">
            <div className={clsx('row', styles.centered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">Table view</h2>
                <p className="">Start building your database directly from the dashboard.</p>
              </div>
            </div>
            <div className={clsx('row', styles.centered)}>
              <div className="col">
                <img
                  className={''}
                  src={'/img/table-view.png'}
                  alt={'Self-documenting dashboards'}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* OSS */}
        <section className={'section-lg'}>
          <div className="container">
            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">Open source</h2>
                <p className="">
                  Kinny <Link to={'/oss'}>loves open source</Link>. Follow us on{' '}
                  <a href="https://github.com/KinnyTips">GitHub</a>. <strong>Watch</strong> the
                  releases of each repo to get notified when we are ready for Beta launch.
                </p>
              </div>
            </div>
            {/* <div style={{ textAlign: 'right' }}>
              <a href="/oss">See more →</a>
            </div> */}
          </div>
        </section>

        {/* <section
          style={{
            marginTop: 100,
            padding: '50px 0',
            borderTop: '1px solid var(--custom-border-color)',
          }}
          className="hero is--dark"
        >
          <div className="container">
            <div>
              <h2
                style={{
                  margin: 10,
                }}
              >
                Enterprise sponsors
              </h2>
            </div>
            <div className="">
              <a
                href={'http://worklife.vc/'}
                target="_blank"
                style={{
                  height: 150,
                  margin: 10,
                }}
              >
                <img src="/img/worklife-dark.png" alt="WorkLife VC" />
              </a>
              <a
                href={'https://github.com/sponsors/Kinny'}
                target="_blank"
                style={{
                  height: 150,
                  margin: 10,
                }}
              >
                <img src="/img/new-sponsor-dark.png" alt="Become a sponsor" />
              </a>
            </div>
          </div>
        </section> */}

        <section
          style={{
            marginTop: 100,
            padding: '50px 0',
            borderTop: '1px solid var(--custom-border-color)',
          }}
          className="hero is--dark"
        >
          <div className="container text--center">
            {/* <div>
              <h2>Get Early Access</h2>
            </div> */}
            <div className="">
              <Link
                className={clsx(
                  'button hero--button button--md button--primary responsive-button',
                  styles.button
                )}
                to={'https://app.Kinny.io'}
                style={{ margin: 5 }}
              >
                Beta sign up →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}