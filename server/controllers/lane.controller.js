import Lane from '../models/lane';
import uuid from 'uuid';
import Note from '../models/note'

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  } else {
    const newLane = new Lane(req.body);
    newLane.notes = [];
    newLane.save()
    .then(savedLane => {
      res.json({ lane: savedLane });
    })
    .catch(err => {
      res.status(500).send(err);
    });
  }
}

export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
}

export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    lane.remove(() => {
      res.status(200).end();
    });
  });
}

export function editLane(req, res) {
  const lane = req.body;
  if(!lane.id ) {
    res.status(403).end();
  }
  Lane.findOneAndUpdate({id: lane.id}, lane, {new: true}, (err, updated) => {
    if(err) {
      res.status(500).send(err);
    }
    res.json(updated);
  })
}