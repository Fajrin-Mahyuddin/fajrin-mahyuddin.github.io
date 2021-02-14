import React, { useState } from "react";
import { Title, Text, Label, Image } from "components";
import { SpringGrid, layout, CSSGrid } from "react-stonecutter";

const LatestProject = () => {
  const stack = [
    {
      src:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    },
    {
      src:
        "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
    },
    {
      src:
        "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
    },
    {
      src:
        "https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc",
    },
    {
      src:
        "https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc",
    },
  ];
  const stack1 = [
    {
      src:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    },

    {
      src:
        "https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc",
    },
  ];
  const stack2 = [
    {
      src:
        "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
    },
    {
      src:
        "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    },
    {
      src:
        "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
    },
  ];
  const [imgs, setImgs] = useState(stack);
  return (
    <div className="container-content p-55-0 text-center" id="project">
      <Title className="text-bold font-large-xx ">Latest Project</Title>
      <button onClick={() => setImgs(stack)}>satu</button>
      <button onClick={() => setImgs(stack1)}>dua</button>
      <button onClick={() => setImgs(stack2)}>tiga</button>
      <div className="image-wrapper">
        <CSSGrid
          component="div"
          columns={3}
          columnWidth={200}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={500}
          easing="ease-out"
          enter={() => ({ translateY: 222 })}
          entered={() => ({ scale: 1, opacity: 1 })}
          exit={() => ({ scale: 0, opacity: 0 })}
        >
          {imgs.map((item, i) => {
            return (
              <div key={i} itemHeight={200}>
                <Image className="img" src={item.src} alt={item.src} />
              </div>
            );
          })}
        </CSSGrid>
      </div>
    </div>
  );
};

export default LatestProject;
