import React from 'react';
import './Home.scss'
const Banner = () => (
    <div className="banner">
        <div className="banner-image">
            <img src="https://unsplash.com/photos/0o_GEzyargo/download?force=true&w=1640&q=100" alt="Hi" />
        </div>
        <h1>Welcome to my first responsive css design</h1>
    </div>
)
const AsideLinks = () => (
    <aside className="navigation-panel">
        <ul>
            <li>
                <a href="/#">
                    <i className="fab fa-accusoft" />
                Microsoft
            </a>
            </li>
            <li>
                <a href="/#">
                    <i className="fas fa-address-card" />
            Address
        </a>{" "}
            </li>
            <li>
                <a href="/#">
                    <i className="fas fa-allergies" />
                Allergies
            </a>
            </li>
            <li>
                <a href="/#">
                    <i className="fas fa-ambulance" />
Ambulance
</a>
            </li>
            <li>
                <a href="/#">
                    <i className="fab fa-angellist" />
Angellist
</a>
            </li>
            <li>
                <a href="/#">
                    <i className="fas fa-angry" />
Angry
</a>
            </li>
            <li>
                <a href="/#">
                    <i className="fab fa-angrycreative" />
Angrycreative
</a>
            </li>
        </ul>
    </aside>
)

const Article = () => (<article className="article-panel">
    <div className="module">
        <div className="caption">
            <h1>SALAM</h1>
        </div>
    </div>
    <div className="hero-image">
        <img
            src="https://unsplash.com/photos/z0MDyylvY1k/download?force=true&w=640"
            alt=""
        />
        <div className="caption">
            <h1>Samal</h1>
        </div>
    </div>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        reiciendis dolor. Tenetur corporis dolorem atque eligendi? Quia veniam
        cupiditate eum impedit nemo ullam provident. Nesciunt molestias aliquam
        repudiandae sunt eum! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Obcaecati, reiciendis dolor. Tenetur corporis dolorem
        atque eligendi? Quia veniam cupiditate eum impedit nemo ullam provident.
        Nesciunt molestias aliquam repudiandae sunt eum! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Obcaecati, reiciendis dolor. Tenetur
        corporis dolorem atque eligendi? Quia veniam cupiditate eum impedit nemo
        ullam provident. Nesciunt molestias aliquam repudiandae sunt eum! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reiciendis
        dolor. Tenetur corporis dolorem atque eligendi? Quia veniam cupiditate
        eum impedit nemo ullam provident. Nesciunt molestias aliquam repudiandae
        sunt eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, reiciendis dolor. Tenetur corporis dolorem atque eligendi?
        Quia veniam cupiditate eum impedit nemo ullam provident. Nesciunt
        molestias aliquam repudiandae sunt eum! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati, reiciendis dolor. Tenetur
        corporis dolorem atque eligendi? Quia veniam cupiditate eum impedit nemo
        ullam provident. Nesciunt molestias aliquam repudiandae sunt eum! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reiciendis
        dolor. Tenetur corporis dolorem atque eligendi? Quia veniam cupiditate
        eum impedit nemo ullam provident. Nesciunt molestias aliquam repudiandae
        sunt eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, reiciendis dolor. Tenetur corporis dolorem atque eligendi?
        Quia veniam cupiditate eum impedit nemo ullam provident. Nesciunt
        molestias aliquam repudiandae sunt eum! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati, reiciendis dolor. Tenetur
        corporis dolorem atque eligendi? Quia veniam cupiditate eum impedit nemo
        ullam provident. Nesciunt molestias aliquam repudiandae sunt eum! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reiciendis
        dolor. Tenetur corporis dolorem atque eligendi? Quia veniam cupiditate
        eum impedit nemo ullam provident. Nesciunt molestias aliquam repudiandae
        sunt eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, reiciendis dolor. Tenetur corporis dolorem atque eligendi?
        Quia veniam cupiditate eum impedit nemo ullam provident. Nesciunt
        molestias aliquam repudiandae sunt eum! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati, reiciendis dolor. Tenetur
        corporis dolorem atque eligendi? Quia veniam cupiditate eum impedit nemo
        ullam provident. Nesciunt molestias aliquam repudiandae sunt eum! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reiciendis
        dolor. Tenetur corporis dolorem atque eligendi? Quia veniam cupiditate
        eum impedit nemo ullam provident. Nesciunt molestias aliquam repudiandae
        sunt eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, reiciendis dolor. Tenetur corporis dolorem atque eligendi?
        Quia veniam cupiditate eum impedit nemo ullam provident. Nesciunt
        molestias aliquam repudiandae sunt eum! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati, reiciendis dolor. Tenetur
        corporis dolorem atque eligendi? Quia veniam cupiditate eum impedit nemo
        ullam provident. Nesciunt molestias aliquam repudiandae sunt eum!
</p>
</article>
);
const HomePage = (props: any) => {
    return (
        <>
            <Banner />

            <div className="home-main">
                <AsideLinks />
                <Article />
                <aside className="aside-panel">Aside</aside>
            </div>

        </>
    )
}

export default HomePage;