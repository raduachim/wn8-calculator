
let rDAMAGE = ((avgDmg, expDmg) => avgDmg/expDmg)(1, 1) // TODO pass params after receiving them from some russian api
let rSPOT = ((avgSpot, expSpot) => avgSpot/expSpot)(1, 1) // TODO pass params after receiving them from some russian api
let rFRAG = ((avgFrag, expFrag) => avgFrag/expFrag)(1, 1) // TODO pass params after receiving them from some russian api
let rDEF = ((avgDef, expDef) => avgDef/expDef)(1, 1) // TODO pass params after receiving them from some russian api
let rWIN = ((avgWinRate, expWinRate) => avgWinRate/expWinRate)(1, 1) // TODO pass params after receiving them from some russian api

let rWINc    = Math.max(0, (rWIN    - 0.71) / (1 - 0.71))
let rDAMAGEc = Math.max(0, (rDAMAGE - 0.22) / (1 - 0.22))
let rFRAGc   = Math.max(0, Math.min(rDAMAGEc + 0.2, (rFRAG   - 0.12) / (1 - 0.12)))
let rSPOTc   = Math.max(0, Math.min(rDAMAGEc + 0.1, (rSPOT   - 0.38) / (1 - 0.38)))
let rDEFc    = Math.max(0, Math.min(rDAMAGEc + 0.1, (rDEF    - 0.10) / (1 - 0.10)))

return 980*rDAMAGEc + 210*rDAMAGEc*rFRAGc + 155*rFRAGc*rSPOTc + 75*rDEFc*rFRAGc + 145*Math.min(1.8,rWINc)
