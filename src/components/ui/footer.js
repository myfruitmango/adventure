import React from "react";

class Footer extends React.Component {
  /**
   * !alert
   * * tidak digunakan lagi saat ini
   * * jika dihapus tidak masalah karena tidak digunakan
   */
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>Footer</h1>
        {this.props.paragraf()}
      </div>
    );
  }
}
export default Footer;
