export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log(props);
  ReactDOM.render(<App />, document.getElementById('react15Root'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));
}