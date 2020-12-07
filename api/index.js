import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:19006',
    header: {
    	Authorization: 'bearer accessKey'
    }
});