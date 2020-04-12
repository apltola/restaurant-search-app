import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer -VRBQGxVcT3ilzaRTUXDwrUkt39x4PsNiVVORJYjWlgzJHt5EFMEotVWZMn5nw2-NgzNNBDiK5TQf6IJNoVDegtmOVmEHrPwaobqZsyZIWouoXvPrJ9dek5xQmFNXnYx'
  }
});