<app>
    <h3>{ props.title }</h3>
    <random></random>
    <script>
        import random from './random.tag'
        export default {
            components: { random }
        }
    </script>
</app>