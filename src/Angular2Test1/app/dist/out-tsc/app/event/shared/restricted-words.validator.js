export function ResitrectedWords(words) {
    return function (control) {
        if (!words)
            return null;
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0
            ? { "restrictedWords": invalidWords.join(", ") }
            : null;
    };
}
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/shared/restricted-words.validator.js.map