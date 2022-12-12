import React,{FunctionComponent} from "react";
import {graphql, Link} from "gatsby";
import { Global,css } from "@emotion/react";
import styled from "@emotion/styled";

const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 20px;
    }
`;

const TextStyle = css`
    font-size: 18px;
    font-weight: 700;
    color: gray;
`;

const TextComponent = styled.div<{ disabled : boolean }>`
    font-size: 20px;
    font-weight: 700;
    text-decoration: ${({ disabled })=> (disabled ? 'line-through' : 'none')}
`;

const TextObject = styled('div')<{ disabled : boolean }>(({ disabled }) => ({
    fontSize: '15px',
    color: 'blue',
    textDecoration: disabled ? 'line-through' : 'none',
}));

type InfoPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string,
                description: string,
                author: string
            }
        }
    }
}

const InfoPage: FunctionComponent<InfoPageProps> = ({
    data: {
        site: {
            siteMetadata: { title, description, author },
        }
    }
}) => {
    return(
        <div>
            <Global styles={globalStyle} />
            <div css={TextStyle}>{title}</div>
            <TextComponent disabled={false}>{description}</TextComponent>
            <TextObject disabled={true}>{author}</TextObject>
            <Link to="/">To Main</Link>
        </div>
    )
}

export default InfoPage;

export const metadataQuery = graphql`
    {
        site {
            siteMetadata{
                title
                description
                author
            }
        }
    }
`