const handleSortByDate = (elA, elB) => {
    // elA elB === Element A or B
    // ymdA ymdB === Year Month Day of A or B
    const ymdA = elA.publishdate.split('/')
    const ymdB = elB.publishdate.split('/')
    const dateA = new Date(`${ymdA[0]}-${ymdA[1]}-${ymdA[2]}`)
    const dateB = new Date(`${ymdB[0]}-${ymdB[1]}-${ymdB[2]}`)
    // newest to oldest
    return dateB - dateA
}

export default handleSortByDate