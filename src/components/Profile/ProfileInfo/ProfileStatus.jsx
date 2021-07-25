import React from 'react';

import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    localStatus: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState(
      { editMode: false },
      this.props.updateUserStatus(this.state.localStatus)
    );
  };

  onStatusChange = (e) => {
    this.setState({
      localStatus: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ localStatus: this.props.status });
    }
  }

  render() {
    return (
      <div className={s.profileStatus}>
        {!this.state.editMode && (
          <div>
            <p onDoubleClick={this.activateEditMode}>{this.props.status}</p>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus
              onBlur={() => {
                this.props.updateUserStatus(this.state.localStatus);
                this.deactivateEditMode();
              }}
              value={this.state.localStatus}
              onChange={this.onStatusChange}
              className={s.statusInput}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
