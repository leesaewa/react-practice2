import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  max-width: 480px;
`;

const Loader = styled.div`
  text-align: center;
`;

const Overview = styled.ul`
  border: 1px solid red;
`;

const OverviewItem = styled.li`
  background-color: aliceblue;
  color: #000;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const [data, setData] = useState<PriceData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(data);
    setLoading(false);
  }, [coinId]);

  return (
    <Container>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>abc</OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
}

export default Price;
