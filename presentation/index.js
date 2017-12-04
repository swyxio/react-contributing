// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Layout,
  Fill,
  Quote,
  Slide,
  Magic,
  Text,
  Image,
  Appear,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#ff4081",
    secondary: "#1F2022",
    link: "cyan"
    // tertiary: "#03A9FC",
    // quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom", "spin", "fade", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Contributing To React
          </Heading>
          <Image
            height="200"
            width="200"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
          <Image src="https://i.imgur.com/K7LbtO2.gif" />
          <Text margin="10px 0 0" textColor="tertiary" bold>
            A{" "}
            <Link href="http://twitter.com/swyx" textColor="link">
              @swyx
            </Link>{" "}
            Story
          </Text>

          <Text size={6}>
            <Link
              href="https://github.com/sw-yx/react-contributing"
              textColor="link"
            >
              https://github.com/sw-yx/react-contributing
            </Link>
          </Text>
        </Slide>
        <Slide transition={["zoom", "spin"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Beginner Friendly
          </Heading>
          <Image src="https://i.redd.it/ski09hcydmmz.jpg" />

          <Heading size={1} caps fit textColor="secondary">
            No Laptop Needed
          </Heading>
        </Slide>
        <Slide
          transition={["spin", "zoom"]}
          bgImage="https://user-images.githubusercontent.com/6764957/33537968-c158ee26-d88c-11e7-8419-3cf83fa951cd.png"
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              OK
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              HOW DO I START!?!?
            </Heading>
          </Appear>
        </Slide>
        <Slide
          transition={["spin", "zoom"]}
          bgImage="https://user-images.githubusercontent.com/6764957/33538080-4a997b7e-d88d-11e7-867a-1d7d3e548c6b.png"
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Image src="https://user-images.githubusercontent.com/6764957/33534959-b18fd16c-d878-11e7-8219-e7059bd93a53.png" />
          </Appear>
        </Slide>
        <Slide transition={["fade", "slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            First PR instructions
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33538228-0f0ce36a-d88e-11e7-9747-04ce0fd1384a.png" />
          <Link href="https://reactjs.org/docs/how-to-contribute.html">
            <Text margin="10px 0 0" textColor="tertiary" bold fit>
              https://reactjs.org/docs/how-to-contribute.html
            </Text>
          </Link>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Read the Docs
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33538298-78238b74-d88e-11e7-9426-d73f41b9ad0e.png" />
          <Link href="https://reactjs.org/docs/how-to-contribute.html">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://reactjs.org/docs/how-to-contribute.html
            </Text>
          </Link>
        </Slide>
        <Slide transition={["zoom", "spin"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Looking for "good first issue"
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33538336-bff6e8c4-d88e-11e7-8801-6dcd8f49b704.png" />
          <Link
            href="https://github.com/facebook/react/issues?utf8=%E2%9C%93&q=label%3A%22good+first+issue%22+"
            textColor="link"
          >
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/issues?utf8=%E2%9C%93&q=label%3A%22good+first+issue%22+
            </Text>
          </Link>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Claiming my issue
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33538472-81d31f12-d88f-11e7-9d70-2f0f5d08216e.png" />
          <iframe
            src="https://giphy.com/embed/iIONScVp5XctO"
            width="320"
            height="201"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide transition={["fade", "spin"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            The Issue
          </Heading>
          <iframe
            height="465"
            scrolling="no"
            title="Contributing to React v15 - forgetting to extend React.Component"
            src="//codepen.io/swyx/embed/ZaPYrM/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            style={{ width: "100%" }}
          >
            See the Pen{" "}
            <a href="https://codepen.io/swyx/pen/ZaPYrM/">
              Contributing to React v15 - forgetting to extend React.Component
            </a>{" "}
            by shawn wang (<a href="https://codepen.io/swyx">@swyx</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <Text>(You can open the console here to see it)</Text>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            They even tell you where!
          </Heading>
          <Image
            height="600"
            src="https://user-images.githubusercontent.com/6764957/33540501-6fd5046a-d899-11e7-878d-e188086d0cdb.png"
          />
          <Link href="https://github.com/facebook/react/issues/10103">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/issues/10103
            </Text>
          </Link>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            But it doesn't exist!
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33540640-fe23e7c2-d899-11e7-838d-450bda9301d4.png" />
          <Heading size={1} caps fit textColor="secondary">
            Any guesses why?
          </Heading>
        </Slide>
        <Slide
          transition={["slide", "zoom"]}
          bgImage="https://user-images.githubusercontent.com/6764957/33540823-b48642a8-d89a-11e7-9e6a-56ac7e272baa.png"
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              React Fiber changed everything
            </Heading>
          </Appear>
          <Appear fid="2">
            <Image src="https://user-images.githubusercontent.com/6764957/33540864-d7cb84f8-d89a-11e7-88fc-b0f321e969a6.png" />
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Including the instructions!
            </Heading>
          </Appear>
        </Slide>

        <Slide
          transition={["fade", "slide"]}
          textColor="white"
          bgImage="https://user-images.githubusercontent.com/6764957/33541344-d5e0d8bc-d89c-11e7-8535-5a17eec553bf.png"
          bgDarken={0.75}
        >
          <Heading size={1} caps fit textColor="primary">
            Spelunking 101
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Read the{" "}
                <Link
                  href="https://reactjs.org/docs/codebase-overview.html"
                  textColor="link"
                >
                  Codebase Overview
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>React is a monorepo</ListItem>
            </Appear>
            <Appear>
              <ListItem>React internals get rearranged a LOT.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If you take too long, merge conflicts will happen
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use the{" "}
                <Link
                  href="https://github.com/facebook/react/tree/master/fixtures"
                  textColor="link"
                >
                  fixtures
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>What are fixtures? Well...</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["spin"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Fixures are integration tests
          </Heading>
          <iframe
            src="https://gfycat.com/ifr/HotOrangeCoypu"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            width="640"
            height="640"
          />
        </Slide>

        <Slide transition={["spin"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Fixures are awesome
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33541913-f3f34aea-d89e-11e7-9bd0-a4e9e4903891.png" />
          <Heading size={1} caps fit textColor="secondary">
            Definitely check them out {" "}
            <Link
              href="https://github.com/facebook/react/tree/master/fixtures"
              textColor="link"
            >
              here
            </Link>
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            About 3 hours trial and error...
          </Heading>
          <iframe
            src="https://giphy.com/embed/l2R04wcEprpUFvrC8"
            width="640"
            height="401"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>

        <Slide transition={["fade", "zoom"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            First PR = Perfection?
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33542099-9a335efe-d89f-11e7-9a05-bcacd6cf7316.png" />
          <Link href="https://github.com/facebook/react/pull/11149">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/pull/11149
            </Text>
          </Link>
        </Slide>

        <Slide transition={["fade", "spin"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Perfection!!!
          </Heading>
          <Image src="http://i0.kym-cdn.com/photos/images/original/001/058/582/779.gif" />
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            First PR = Rookie Mistakes
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33542158-d42b1e44-d89f-11e7-901d-e9cd40a3c983.png" />
          <Text margin="10px 0 0" textColor="primary" bold fit>
            What is going on here?
          </Text>
        </Slide>
        <Slide transition={["spin", "zoom"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            First PR = Changing all the dependencies!
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33542194-f415495a-d89f-11e7-82f5-e06f13360384.png" />
          <Link href="https://github.com/facebook/react/pull/11149/commits/b5398d1e3806b9d3f5be186c8daaff4308df18b8">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/pull/11149/commits/b5398d1e3806b9d3f5be186c8daaff4308df18b8
            </Text>
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            First PR = <span style={{ color: "red" }}>#Fail</span>
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33542508-53a9d7f4-d8a1-11e7-9735-65c8c30901a6.png" />
          <Text margin="10px 0 0" textColor="primary" bold fit>
            The only way I knew to "git undo" was to junk the whole repo.
          </Text>
          <Text margin="10px 0 0" textColor="primary" bold fit>
            (Now I know you can take{" "}
            <Link
              href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
              textColor="link"
            >
              Kent Dodds' Open Source Git course
            </Link>)
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading caps fit bgColor="secondary" textColor="red">
            #Fail
          </Heading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
              gridTemplateRows: "50% 50%"
            }}
          >
            <Text>What I think I'm doing</Text>
            <Text>What I'm actually doing</Text>
            <iframe
              src="https://giphy.com/embed/FVQFOSQo4xYEE"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              height="300"
            />
            <iframe
              src="https://giphy.com/embed/pjs01sIvL023K"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              height="300"
            />
          </div>
        </Slide>

        <Slide transition={["spin", "fade"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Second PR = Perfection?
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33542794-7b37e17a-d8a2-11e7-8484-3c81342a8be6.png" />
          <Link href="https://github.com/facebook/react/pull/11168">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/pull/11168
            </Text>
          </Link>
        </Slide>
        <Slide transition={["fade", "zoom"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Second PR = 💩
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33542845-aebf4e16-d8a2-11e7-91fb-2deb1fc132c0.png" />
          <Text margin="10px 0 0" textColor="secondary" bold fit>
            Protip: Don't lie to your maintainer if you want your PR accepted
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            About 3 days trial and error...
          </Heading>
          <iframe
            src="https://giphy.com/embed/sSmxfWnEVxtWU"
            width="640"
            height="401"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>

        <Slide transition={["spin"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Line by Line Code Review
          </Heading>
          <Image
            height="500"
            src="https://user-images.githubusercontent.com/6764957/33542971-2eaa321c-d8a3-11e7-9d05-5f61fa5081fb.png"
          />
          <Text margin="10px 0 0" textColor="secondary" bold fit>
            AWESOME.
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          align="center center"
        >
          <BlockQuote>
            <Quote>We'll need a test for this.</Quote>
            <Cite>Dan Abramov</Cite>
          </BlockQuote>
          <iframe
            src="https://giphy.com/embed/3o6Mbbs879ozZ9Yic0"
            width="640"
            height="401"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide transition={["spin", "fade"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Tests in React
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33570380-aa300590-d8fa-11e7-9540-848f9e2fddb4.png" />
          <Link href="https://reactjs.org/docs/codebase-overview.html">
            <Text margin="10px 0 0" textColor="link" bold fit>
              Codebase Overview {" "}
            </Text>
          </Link>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          align="center center"
        >
          <BlockQuote>
            <Quote>
              Jest is my favorite… I will not use anything else for a long time.
            </Quote>
            <Cite>Kent C. Dodds, TC39 member</Cite>
          </BlockQuote>
          <iframe
            src="https://giphy.com/embed/7MZ0v9KynmiSA"
            width="640"
            height="401"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            About 2 weeks of back and forth...
          </Heading>
          <iframe
            src="https://giphy.com/embed/11pRX8ixgaittS"
            width="640"
            height="401"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide
          transition={["slide", "fade"]}
          bgColor="secondary"
          bgImage="https://user-images.githubusercontent.com/6764957/33543550-73cca0a8-d8a5-11e7-960c-f7a4267b533e.png"
          bgDarken={0.75}
        >
          <Heading size={1} caps fit textColor="primary">
            MERGED
          </Heading>
          <Image
            src="https://user-images.githubusercontent.com/6764957/33543450-13aad44c-d8a5-11e7-87ce-a342807a1eec.png"
            height="400"
          />
          <Link href="https://github.com/facebook/react/pull/11168">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/pull/11168
            </Text>
          </Link>
        </Slide>
        <Slide
          transition={["spin", "zoom"]}
          bgColor="secondary"
          bgImage="https://user-images.githubusercontent.com/6764957/33543550-73cca0a8-d8a5-11e7-960c-f7a4267b533e.png"
          bgDarken={0.75}
        >
          <Heading size={1} caps fit textColor="primary">
            MERGED!!
          </Heading>
          <Image src="https://user-images.githubusercontent.com/6764957/33543790-5840ea82-d8a6-11e7-8188-63dcbf9a76f2.png" />
          <Link href="https://github.com/facebook/react/releases/tag/v16.1.0">
            <Text margin="10px 0 0" textColor="link" bold fit>
              https://github.com/facebook/react/releases/tag/v16.1.0
            </Text>
          </Link>
        </Slide>
        <Slide transition={["spin", "zoom"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="red">
            MERGED!!1!!
          </Heading>

          <iframe
            src="https://giphy.com/embed/cFkiFMDg3iFoI"
            width="640"
            height="400"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide transition={["fade", "slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Most Importantly...
          </Heading>
          <iframe
            height="465"
            scrolling="no"
            title="Contributing to React v16 - forgetting to extend React.Component"
            src="//codepen.io/swyx/embed/RjdNBR/?height=265&theme-id=dark&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            style={{ width: "100%" }}
          >
            See the Pen{" "}
            <a href="https://codepen.io/swyx/pen/RjdNBR/">
              Contributing to React v16 - forgetting to extend React.Component
            </a>{" "}
            by shawn wang (<a href="https://codepen.io/swyx">@swyx</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>
            Takeaways
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary" caps>
                Don't Need
              </Heading>
              <List>
                <ListItem>Know every LOC</ListItem>
                <ListItem>Flow</ListItem>
                <ListItem>advanced Git</ListItem>
                <ListItem>CS Degree</ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary" caps>
                You Need
              </Heading>
              <List>
                <ListItem>Patience</ListItem>
                <ListItem>Diligence</ListItem>
                <ListItem>Determination</ListItem>
                <ListItem>Enjoyment</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            Inspirations
          </Heading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "25% 25% 25% 25%",
              gridTemplateRows: "50% 50%"
            }}
          >
            <Image
              height="100%"
              width="100%"
              src="https://avatars2.githubusercontent.com/u/3624098?s=460&v=4"
            />
            <Image
              height="100%"
              width="100%"
              src="https://avatars2.githubusercontent.com/u/29597?s=460&v=4"
            />
            <Image
              height="100%"
              width="100%"
              src="https://avatars1.githubusercontent.com/u/810438?s=460&v=4"
            />
            <Image
              height="100%"
              width="100%"
              src="https://avatars3.githubusercontent.com/u/1519870?s=460&v=4"
            />
            <Image
              height="100%"
              width="100%"
              src="https://avatars0.githubusercontent.com/u/1114467?s=460&v=4"
            />
            <Image
              height="100%"
              width="100%"
              src="https://cdn-images-1.medium.com/max/800/1*s6Y2T2HGm_PPgc9CSC4_-w.jpeg"
            />
            <Image
              height="100%"
              width="100%"
              src="https://avatars0.githubusercontent.com/u/6820?s=460&v=4"
            />
            <Image
              height="100%"
              width="100%"
              src="https://avatars3.githubusercontent.com/u/3696934?s=460&v=4"
            />
          </div>

          <Link href="https://wpcouple.com/interview-react-team-facebook-wordpress-gutenberg/">
            <Text margin="10px 0 0" textColor="link" bold fit>
              Only one person on the React team has a CS degree
            </Text>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Inspiration
          </Heading>
          <p textColor="secondary">...</p>
          <Heading size={6} textColor="white">
            🔥 1.8 million downloads a month
          </Heading>
          <Heading size={6} textColor="primary">
            🌟 83,000 Github stars
          </Heading>
          <Heading size={6} textColor="white">
            ⚛️ 1,144 Contributors
          </Heading>
          <p textColor="secondary">...</p>
          <Heading size={1} caps fit textColor="goldenrod">
            You can be the 1%
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>
            join the cool kids!
          </Heading>
          <Image height="400" src="https://i.imgur.com/K7LbtO2.gif" />
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="black">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with 🔥in NYC by
          </Heading>
          <Link href="http://twitter.com/swyx">
            <Heading size={3} textColor="link">
              @swyx
            </Heading>
          </Link>
          <Text size={5} caps textColor="goldenrod">
            (Happy to mentor)
          </Text>
          <p textColor="black">.</p>
          <Text size={6} textColor="white">
            Presentation Repo{" "}
            <Link
              href="https://github.com/sw-yx/react-contributing"
              textColor="link"
            >
              here
            </Link>
            <br />
            built with {" "}
            <Link
              href="http://formidable.com/open-source/spectacle/"
              textColor="link"
              size={6}
            >
              👓 by Formidable Labs
            </Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}

// <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//   <BlockQuote>
//     <Quote>Example Quote</Quote>
//     <Cite>Author</Cite>
//   </BlockQuote>
// </Slide>
