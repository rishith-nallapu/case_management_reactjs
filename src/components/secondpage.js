// SecondPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import law from './justice 2.jpeg';

const SecondPageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid green;
  margin: 20px;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #212529;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
`;

const SecondPage = () => {
    return (
        <SecondPageContainer>
            <Link to="/">
                <Image src={law} alt="law" />
            </Link>
            <Content>
                <h2>Information About Our App</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat accusamus consequuntur quae voluptatem amet dolore, debitis, veniam dicta deserunt natus in iure impedit temporibus ex officia exercitationem iusto optio.
                    Facilis aliquam libero dolorum error accusamus laudantium impedit molestias id dolor molestiae fugiat, ullam odio repellendus aliquid blanditiis totam. Laborum, magnam alias magni numquam at voluptatum repellendus temporibus aspernatur dolore!
                    Corrupti sequi libero error eveniet facere, inventore, nam quo, animi soluta culpa iste fugit possimus maxime minima dolore nostrum esse explicabo exercitationem. Officiis quaerat distinctio dolores reprehenderit iure vitae velit.
                    Perspiciatis, nostrum labore. Velit sequi ipsum delectus nobis maiores, quibusdam fuga alias cupiditate mollitia vitae, inventore, libero asperiores dignissimos voluptatem porro reprehenderit corrupti praesentium magnam hic ad tenetur. Facilis, qui.
                    Delectus eligendi pariatur, saepe commodi cumque harum culpa esse, eaque nostrum aut repudiandae autem amet quos. Eius sunt quidem, accusamus unde necessitatibus, placeat, quam in voluptatum vitae fugit veniam repudiandae.
                    Consectetur rem quam ipsam culpa necessitatibus voluptates itaque id, animi numquam dolorem quod cum quidem ut minus deserunt qui recusandae sapiente, quasi quo? Neque molestiae reprehenderit consequatur id eum. Ad?</p>
            </Content>
        </SecondPageContainer>
    );
};

export default SecondPage;
