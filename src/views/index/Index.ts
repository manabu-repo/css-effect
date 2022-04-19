import { h, ref } from 'vue';

const count = ref(0);

const onClick = () => {
  count.value++;
};

export default function render() {
  return h('div', { className: 'container' }, [
    h('div', { className: 'title' }, count.value),
    h('button', { onClick: onClick }, 'click'),
  ]);
}
