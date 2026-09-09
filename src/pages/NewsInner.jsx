import React from 'react'
import { useParams } from 'react-router-dom';
import InnerBnanner from '../components/InnerBanner';
import NewsCard from '../components/ResuableComponents/NewsCard';
import TalkSection from '../components/TalkSection';
import { newsData } from '../helper/Utils';

const NewsInner = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <main>
            <section className="inner_hero_section">
                <InnerBnanner title={"lorem quis"} heading={<>Mine-ex</>} description={<>Seit 1995 schenkt mine-ex den leidgeprüften Menschen, die durch einen<br/> schrecklichen Minenunfall eine oder mehrere Gliedmassen verloren haben,<br/> eine bessere Zukunft. </>}  footer={true} button={'Besuchen Sie die Website'} buttonLink={'/news'}/>
            </section>
            <section className="image_layout_section pt_pb_3">
                <div className="container">
                    <div className="row g-4">

                    {/* SVG */}
                    <div className="col-12 col-md-4">
                        <div className="intro-svg mx-auto mx-md-0">
                            <div className="sub_title">Nibh vel velit auctors</div>

                        </div>
                    </div>

                    {/* Text */}
                    <div className="col-12 col-md-8">
                        <p className="intro-text mb-0">
                            Aenean sollicitudin,{" "}
                            {/* <span className="theme-text"> */}
                            lorem quis bibendum auctor, nisi elit consequat
                            {/* </span>{" "} */}
                            ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                            vulputate cursus a sit amet mauris.
                        </p>
                    </div>

                </div>
                    <div className="row g-4 mt-4">

                        <div className="col-12 col-lg-6">
                            <div className="image_layout_item">
                                <img
                                    src="/images/newsImages/Rectangle1303.png"
                                    alt="fist image"
                                    className="w-100"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="image_layout_item">
                                <img
                                    src="/images/newsImages/Rectangle1304.png"
                                    alt="second image"
                                    className="w-100"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="content_image_section my-4">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Content */}
                        <div className="col-12 col-lg-6">
                            <div className="content_image_content">
                                <div className="sub_title">
                                    Auctor Aliquet
                                </div>

                                <h2>
                                    Aenean sollicitudin, lorem quis
                                    bibendum auctor
                                </h2>

                                <p>
                                    Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                                    vulputate cursus a sit amet mauris. Morbi et amet accumsan ipsum
                                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                                </p>

                                <p>
                                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                    Morbi et amet accumsan ipsum velit. Nam nec tellus a odio
                                    tincidunt auctor a ornare odio. vulputate cursus a sit amet
                                    mauris. Morbi et amet accumsan ipsum velit. Nam nec tellus a odio
                                    tincidunt auctor a ornare odio. vulputate cursus a sit amet
                                    mauris. Morbi et amet accumsan ipsum velit. Nam nec tellus a odio
                                    tincidunt auctor a ornare odio.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-12 col-lg-6">
                            <div className="content_image">
                                <img
                                    src="/images/newsImages/Rectangle1226.png"
                                    alt="Children in a boat"
                                    className="w-100"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* related news  */}
            <section className="news-page-section news_section pt_3">
            <NewsCard
                newsData={newsData.slice(0, 3)}
                showHeader={true}
                showFooter={false}
                button={"Alle News"}
                buttonLink={"/news"}
            /></section>
            <section className="pt_pb_3 talk_section">
                <TalkSection />
            </section>
        </main>
    )
}

export default NewsInner