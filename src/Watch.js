import moment from 'moment';

class Watch {
  constructor(id, name, timeZone) {
    this.id = id;
    this.name = name;
    this.timeZone = timeZone;
    this.time = moment().zone(-60 * this.timeZone).format('h:mm:ss');;
  }
}
export default Watch;