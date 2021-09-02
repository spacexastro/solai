import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Soliens (Not So) Secret Society</title>
        <link rel="icon" href="/images/logo-gold@4x.png" />
        <script src="https://kit.fontawesome.com/bfa4bd952a.js" crossorigin="anonymous"></script>
        <meta property="og:title" content="Soliens (Not So) Secret Society" key="ogtitle" />
        <meta property="og:description" content="Soliens (Not So) Secret Society" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://soliens.io/" key="ogurl"/>
        <meta property="og:image" content="/images/logo-gold@4x.png" key="ogimage"/>
        <meta property="og:site_name" content="https://soliens.io/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="soliens.io" key="twdomain" />
        <meta property="twitter:url" content="https://soliens.io/" key="twurl" />
        <meta name="twitter:title" content="Soliens (Not So) Secret Society." key="twtitle" />
        <meta name="twitter:description" content="Soliens (Not So) Secret Society" key="twdesc" />
        <meta name="twitter:image" content="/images/logo-gold@4x.png" key="twimage" />
      </Head>


      <div class='landing-wrapper'>
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="/images/logo-gold@4x.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#about" className="text-4xl text-white nava m-6">About</a>
              <a href="https://snsss.holaplex.com/#/" className="text-4xl nava text-white m-6">MARKETPLACE</a>
              <a href="#traits" className="text-4xl nava text-white m-6">SOLIEN VARIANTS</a>
              <a href="#roadmap" className="text-4xl nava text-white m-6">Roadmap</a>
              <a href="#dao" className="text-4xl nava text-white m-6">DAO</a>
              <a href="#contact" className="text-4xl nava text-white m-6">Contact</a>
            </nav>
             
          </div>
          
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="https://kit.fontawesome.com/bfa4bd952a.js" crossorigin="anonymous"></script>
        
        <div class="icon-bar">
          <a href="https://discord.gg/fbhH6Bnz5A" class="discord"><img src="/images/berk.svg"/></a>
          <a href="https://twitter.com/SoliensNFT" class="twitter"><i class="fa fa-twitter"></i></a>
        </div>

        
        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl staat text-white ">Meet the <br/><span className="text-blau">SOLIENS</span></h1>
                    <p className="text-2xl text-white my-6  Roboto">The <span className="text-3xl staat ">Solien</span> <span className="text-blau text-3xl staat">(Not So) Secret</span> <span className="text-3xl staat">Society</span> NFT project was made with two purposes<span className="text-span-2 font-bold">:</span><br />‍<br /><ul> <li>Share and fund exciting, potentially groundbreaking research into discovering signs of Extraterrestrial Civilizations through unique characters.</li><br/>AND<br/><br/>Leverage booming Solana ecosystem through a collective consciousness in the form of a DAO.<br/><br/></ul>
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> TBD <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 10,101</strong> Soliens.<br/><strong>PRICE: 4 SOL </strong>each.</span></p>
                    

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="/images/smart-solien.png" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="https://snsss.holaplex.com/#/" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO STOREFRONT!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/solien-traits1.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">SOLIEN VARIANTS</h2>
                    {/* <p className="text-xl text-white my-6  montserrat"> Following the recent worldwide pandemic, <span className="font-bold"> emerging reports </span>  suggest that several <span className="font-bold"> banana species </span> have begun exhibiting <span className="font-bold"> strange characteristics. </span> Our research team located across the globe has commenced efforts to <span className="font-bold"> study and document </span>  these unusual phenomena.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> The fate of the world's bananas depends on it.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Your support in this time of need is greatly appreciated!   
                    </p> */}
                  </div>
                </div>
              <p className="text-xl text-white text-center my-6  montserrat"> Legend states that the Soliens are a species of blockchain-based aliens which provided Anatoly Yakovenko with the "secret ingredient" to making Solana so fast and cost-effective. The cabals of the world knew this, and decided to round up all the Soliens they could find by tapping into MUFON's UFO reporting system and intercepting their ships in order to torture them into giving up the blockchain secrets so that they could use it for their own nefarious purposes. Recently, members of the relatively unknown "Soliens (Not so) Secret Society" have gotten hold of mugshots from an anonymous whistleblowers - and are on a mission to spread these mugshots to every wallet on the blockchain in order to raise awareness for the existence of ET.<br></br><br></br>Some Soliens are being held in Alien facilities, some in Human facilities, and some are even floating through a cosmic prison. Regardless, they are all holding a special mugshot sign with a message they wish to spread throughout the collective universal consciousness. Some of these messages are noble, witty, relevant, but others are raunchy, silly, and flat out strange. Soliens have been living on Earth so long that they're starting to act like us... yet we don't even acknowledge they exist. Join our Society to help get to the truth - together!</p>
                
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-7xl text-center">GALILEO SERIES</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/galileo10.jpg" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/galileo9.jpg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/galileo4.jpg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/galileo5.jpg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/galileo1.jpg" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              <div id="roadmap" className="">
                
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <img src="/images/timeline.png"/>
              <h2 id="dao" className="text-7xl text-center Poppitandfinchsans text-blau my-4">SOLIENDAO</h2>
                <iframe src="Soliens_Litepaper.pdf" class="litepaper" width="100%" height="800px"></iframe>
                <p class="whitepaper"><a class="text-2xl text-white my-6  Poppitandfinchsans" href="Soliens_Whitepaper_V3.0_1">Download Full Whitepaper Here</a></p>
              
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">HOW WE'RE GIVING BACK</h2>
              <p className="text-xl text-white my-6  montserrat">The Soliens have recently discovered a project that has the potential to expose their existence and technology to the world, and so they decided to dedicate a portion of this project to support The Galileo Project.  (https://projects.iq.harvard.edu/galileo/activities)

<br></br><br></br>The goal of the Galileo Project is to bring the search for extraterrestrial technological signatures of Extraterrestrial Technological Civilizations (ETCs) from accidental or anecdotal observations and legends to the mainstream of transparent, validated and systematic scientific research. This ground-based project is complementary to traditional SETI, in that it searches for physical objects, and not electromagnetic signals, associated with extraterrestrial technological equipment.

<br></br><br></br>Irrespective of the possibility that the Galileo Project may discover additional, or even extraordinary evidence for ETCs, at a minimum the Galileo Project will gather rich data sets that may foster the discovery of — or better scientific explanations for — novel interstellar objects with anomalous properties, and for potential new natural atmospheric phenomena, or in some instances terrestrial technology explanations for many of the presently inexplicable UAP.
              </p>
                    
            


              </div>
              
              
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/soliens-logo.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT THE MOTHERSHIP</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you! Feel free to reach out with any questions.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Drop us a line at <a className="text-white underline font-bold" target="_blank" href="mailto:soliensnft@gmail.com">soliensnft@gmail.com</a>,<br/>
                    or alternatively reach out to us on Twitter <a className="text-white underline font-bold" target="_blank" href="https://twitter.com/SoliensNFT">@SoliensNFT</a><br/> 
                    Or ALTERNATIVELY, join our <a className="text-white underline font-bold" target="_blank" href="https://discord.gg/fbhH6Bnz5A">Discord Server</a>.
                    </p>
                  </div>
              </div>   
          </div>  
          
    </div>  
    
    )
  }
  /*<iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>-->*/