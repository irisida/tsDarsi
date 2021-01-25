import axios from 'axios';
import { User } from './models/User';

const user = new User({ name: 'NOT SET', age: 30 });

user.events.on('changeroo', () => {
    console.log('changeroo');
});
user.events.trigger('changeroo');
