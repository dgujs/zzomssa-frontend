import React, { useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';

import {
  replaceAll,
  checkDuration,
  descLengthOverCut,
} from '../../../lib/Util';

import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardText,
  CardDuration,
  CardBrandInfo,
} from '../styled/desktop';

const ContentsBrandCardList = (props) => {
  const { promotions } = useContext(PromotionContext);
  const { brandName } = props;

  return (
    <CardListContainer>
      {promotions?.data?.map((promotion) => {
        const {
          id,
          description,
          startAt,
          endAt,
          image,
          title,
          url,
        } = promotion;
        const duration = checkDuration(startAt, endAt);
        const parsedDescription = descLengthOverCut(description);
        const refinedTitle = replaceAll(title, '\r\n', ' ');
        const refinedDesc = replaceAll(parsedDescription, '\r\n', ' ');

        return (
          <>
            <CustomCard key={id}>
              <CustomCardImg
                src={image}
                alt="Card image cap"
                onClick={() => window.open(url, '_blank')}
              />
              <CustomCardBody>
                <CardContent>
                  <CardTitle>{refinedTitle}</CardTitle>
                  <CardText>{refinedDesc}</CardText>
                  <CardDuration>{duration}</CardDuration>
                </CardContent>
                <CardBrandInfo>{brandName}</CardBrandInfo>
              </CustomCardBody>
            </CustomCard>
          </>
        );
      })}
    </CardListContainer>
  );
};

export default ContentsBrandCardList;
