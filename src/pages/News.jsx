import React from 'react'
import InnerBnanner from '../components/InnerBanner'

const News = () => {
  return (
   <main>
    <section className="inner_hero_section">
    <InnerBnanner  title={"Nibh vel velit Auctor Aliquet"} heading={ <> Aenean sollicitudin, lorem <br/>quis bibendum auctor </> } description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat</>}/>
</section>
   </main>
  )
}

export default News
