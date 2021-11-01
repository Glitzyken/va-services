const RandomTip = require('../models/randomTipModel');

exports.createNewTip = async (req, res) => {
  try {
    const { body } = req;

    if (!body.topic || !body.tip) {
      res.status(400).json({
        status: 'fail',
        message: 'Topic and Tip are both required.',
      });

      return;
    }

    const tip = await RandomTip.create(body);

    res.status(200).json({
      status: 'success',
      data: {
        tip,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getAllTips = async (req, res) => {
  const tips = await RandomTip.find();

  res.status(200).json({
    status: 'success',
    results: tips.length,
    data: {
      tips,
    },
  });
};

exports.getRandomTips = async (req, res) => {
  const randomTip = await RandomTip.aggregate([{ $sample: { size: 1 } }]);

  res.status(200).json({
    status: 'success',
    data: {
      randomTip,
    },
  });
};

exports.updateOneTip = async (req, res) => {
  const updatedTip = await RandomTip.findByIdAndUpdate(req.params.id, req.body);

  if (!updatedTip) {
    res.status(404).json({
      status: 'fail',
      message: 'No tip found with that ID.',
    });

    return;
  }

  res.status(200).json({
    status: 'success',
    data: {
      updatedTip,
    },
  });
};

exports.deleteOneTip = async (req, res) => {
  await RandomTip.findByIdAndDelete(req.params.id);

  res.status(204).json({});
};
