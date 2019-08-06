import Axios from 'axios';

const Key = "AIzaSyC_rRukVv6YOHTeaPT_jr32kGyOutu5_v4";

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults: 5,
      key: Key
  }

})


