//var env = process.env;
export default  {
   port:  8080,
  host: '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
}