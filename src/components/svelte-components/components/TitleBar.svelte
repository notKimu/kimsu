<script lang="ts">
    export let title: string;
    export let type:  string;
</script>

<div class="title-bar flex {type}-bar">
    <div class="buttons flex a-center">
        <button class="button {type}-button padding-0" />
        <button class="button {type}-button padding-0" />
        <button class="button {type}-button padding-0" />
    </div>
    <p>{title}</p>
</div>

<style>
    .title-bar  {
        white-space: nowrap;
        overflow-x:  auto;
    }

    .buttons {
        gap: var(--title-buttons-gap);
    }

    .button {
        height: var(--bar-button-size);
        width:  var(--bar-button-size);
    }

    .std-button {
        border:           1px solid var(--title-color);
        background-color: var(--text-color);
        border-radius:    50%;
    }

    .win32-bar {
        flex-direction:  row-reverse;
        justify-content: space-between;
    }
    .win32-button {
        border-radius: 0;
    }

    .macOS-button {
        border-bottom: var(--border2);
        border-left:   var(--border1);
        border-radius: 50%;
        border-right:  var(--border2);
        border-top:    var(--border1);
    }
    .macOS-button:nth-child(1n) { background-color: #f68181; } .macOS-button:nth-child(2n) { background-color: #f6c381; } .macOS-button:nth-child(3n) { background-color: #94f681; }

    .neo-bar {
        border-bottom: var(--border1);
    }
    .neo-button {
        background-color: var(--text-color);
        border-top:       var(--border1);
        border-left:      var(--border1);
        border-right:     var(--border2);
        border-bottom:    var(--border2);
    }
    .neo-button:nth-child(1n) { 
        border-radius: var(--border-radius);
    }
    .neo-button:nth-child(2n) {
        border-radius: 0 0 50% 50%;
    }
    .neo-button:nth-child(3n) {
        border-radius: .3rem;
    }

    .cute-bar {
        flex-direction:  row-reverse;
        justify-content: space-between;
    }
    .cute-button {
        background-color: var(--text-color);
    }
    .cute-button:hover {
        animation: boioioing .4s cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    @keyframes boioioing {
        0% {
            transform: scale(1);
        } 50% {
            transform: scale(1.2);
        } 100% {
            transform: scale(1);
        }
    }
</style>