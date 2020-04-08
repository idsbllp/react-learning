import { connect, ConnectedProps } from 'react-redux';
import { decrementCount, incrementCount } from '$actions/count';
import { selectCount } from '$selectors/count';
import { IRootState } from '$typings/redux';

const mapStateToProps = (state: IRootState) => ({
  count: selectCount(state),
});

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
};

const connecter = connect(mapStateToProps, mapDispatchToProps);

export type ICountProps = ConnectedProps<typeof connecter>;

export default connecter;
