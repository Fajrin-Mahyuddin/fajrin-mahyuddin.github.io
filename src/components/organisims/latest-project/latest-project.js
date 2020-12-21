import React from "react";
import { Title, Text, Label, Image } from "components";

const LatestProject = () => {
  const stack = ["Javascript", "Express", "Grapql"];
  return (
    <div>
      <Title className="text-bold font-large-xx ">Latest Project</Title>
      <div className="image-wrapper">
        <Image
          className="img"
          src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
          alt="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
        />
        <Image
          className="img"
          src="https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"
          alt="https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"
        />
        <Image
          className="img"
          src="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
          alt="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
        />
        <div className="box img">
          <span className="date-box">3 Dec</span>
          {/* <CalendarOutlined className="ico-galery" /> */}
        </div>
        <div className="box img">
          <span className="box-quote">"Make a beauty day with code"</span>
        </div>
        <Image
          className="img"
          src="https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc"
          alt="https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc"
        />
      </div>
    </div>
  );
};

export default LatestProject;
